const session = require("supertest-session");
const app = require("../index.js"); // Importo el archivo de entrada del server de express.
const { sumArray } = require("../utils.js");

const agent = session(app);

describe("Test de APIS", () => {
  describe("GET /", () => {
    it("responds with 200", () => agent.get("/").expect(200));
    it("responds with and object with message `hola`", () =>
      agent.get("/").then((res) => {
        expect(res.body.message).toEqual("hola");
      }));
  });

  describe("GET /test", () => {
    it("responds with 200", () => agent.get("/test").expect(200));
    it("responds with and object with message `test`", () =>
      agent.get("/test").then((res) => {
        expect(res.body.message).toEqual("test");
      }));
  });

  describe("POST /sum", () => {
    it("responds with 200", () => agent.post("/sum").expect(200));
    it("responds with the sum of 2 and 3", () =>
      agent
        .post("/sum")
        .send({ a: 2, b: 3 })
        .then((res) => {
          expect(res.body.result).toEqual(5);
        }));
    it("responds with the sum of 7 and 8", () =>
      agent
        .post("/sum")
        .send({ a: 7, b: 8 })
        .then((res) => {
          expect(res.body.result).toEqual(15);
        }));
  });

  describe("POST /producto", () => {
    it("responds with 200", () => agent.post("/product").expect(200));
    it("responds with the product of 2 and 3", () =>
      agent
        .post("/product")
        .send({ a: 2, b: 3 })
        .then((res) => {
          expect(res.body.result).toEqual(6);
        }));
    it("responds with the product of 7 and 8", () =>
      agent
        .post("/product")
        .send({ a: 7, b: 8 })
        .then((res) => {
          expect(res.body.result).toEqual(56);
        }));
  });

  describe("UTILS sumArray", () => {
    const array = [2, 5, 7, 10, 11, 15, 20];
    it("Should return true if the sum of the two numbers equals the result searched", () => {
      expect(sumArray(array, 13)).toBe(true);
    });
    it("Should return false if the sum of the two numbers equals the result searched", () => {
      expect(sumArray(array, 99)).toBe(false);
    });
    it("Should throw error if first parameter is not an array", () => {
      expect(() => sumArray({ a: 1, b: 2 }, 99)).toThrowError("array");
    });
    it("Should throw error if second parameter is not a number", () => {
      expect(() => sumArray(array, "hola")).toThrowError("number");
    });
  });

  describe("POST /sumArray", () => {
    it("responds with 200", () => agent.post("/sumArray").expect(200));
    it("responds with true because 2 + 11 equals 13", () =>
      agent
        .post("/sumArray")
        .send({ array: [2, 5, 7, 10, 11, 15, 20], num: 13 })
        .then((res) => expect(res.body.result).toBe(true)));
  });

  describe("POST /numString", () => {
    it("responds with 200", () =>
      agent.post("/numString ").send({ str: "hi" }).expect(200));
    it("respond with 4", () =>
      agent
        .post("/numString")
        .send({ str: "Hola" })
        .then((res) => expect(res.body.result).toEqual(4)));
    it("respond with 8", () =>
      agent
        .post("/numString")
        .send({ str: "Gonzalo" })
        .then((res) => expect(res.body.result).toEqual(7)));
    it("respond with status 400 if string is a number", () =>
      agent
        .post("/numString")
        .send({ str: 5 })
        .then((res) => expect(400)));
    it("respond with status 400 if string is empty", () =>
      agent
        .post("/numString")
        .send({ str: "Gonzalo" })
        .then((res) => expect(400)));
  });

  describe("POST / pluck recibe un arreglo de objetos y un nombre de una propiedad y devuelve un arreglo solo con los valores de esa propiedad", () => {
    const arrOk = [
      { name: "Toni" },
      { surname: "Cirone" },
      { name: "Fede", surname: "Panella" },
      { age: 30 },
    ];
    it("respond with 200", () =>
      agent.post("/pluck").send({ array: arrOk, prop: "name" }).expect(200));
    it("respond with an object with message ", () =>
      agent
        .post("/pluck")
        .send({ array: arrOk, prop: "name" })
        .then((res) => {
          expect(res.body.result).toEqual(["Toni", "Fede"]);
        }));
    it("respond with 400 if array is not an array ", () =>
      agent.post("/pluck").send({ array: {}, prop: "name" }).expect(400));
    it("respond with 400 if prop = '' ", () =>
      agent.post("/pluck").send({ array: arrOk, prop: "" }).expect(400));
  });
});
