"use strict";
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:
class $Promise {
  constructor(executor) {
    this._state = "pending";
    this._value = undefined;
    this._handlerGroups = [];
    this._internalResolve = this._internalResolve.bind(this);
    this._internalReject = this._internalReject.bind(this);

    if (typeof executor !== "function")
      throw new TypeError("executor is not a function");

    executor(this._internalResolve, this._internalReject);
  }
  _internalResolve(value) {
    if (this._state === "pending") {
      this._state = "fulfilled";
      this._value = value;
    }
    this._callHandlers();
  }
  _internalReject(value) {
    if (this._state === "pending") {
      this._state = "rejected";
      this._value = value;
    }
    this._callHandlers();
  }
  then(successCb, errorCb) {
    const downstreamPromise = new $Promise(() => {});
    this._handlerGroups.push({
      successCb: typeof successCb === "function" ? successCb : false,
      errorCb: typeof errorCb === "function" ? errorCb : false,
      downstreamPromise,
    });
    this._callHandlers();
    return downstreamPromise;
  }
  catch(errorCb) {
    return this.then(null, errorCb);
  }
  static resolve(value) {
    if (value instanceof $Promise) return value;
    const p = new $Promise(() => {});
    p._internalResolve(value);
    return p;
  }

  static all(promises) {
    if (!Array.isArray(promises)) throw new TypeError();
    const p = new $Promise((resolve, reject) => {
      const totalPromises = promises.length;
      let resolvedPromises = 0;
      const results = new Array(totalPromises);
      promises.forEach((promise, index) => {
        if (promise instanceof $Promise) {
          promise.then((value) => {
            resolvedPromises++;
            results[index] = value;
            if (totalPromises === resolvedPromises) resolve(results);
          }, reject);
        } else {
          resolvedPromises++;
          results[index] = promise;
          if (totalPromises === resolvedPromises) resolve(results);
        }
      });
    });
    return p;
  }

  _callHandlers() {
    while (this._state !== "pending" && this._handlerGroups.length) {
      const { successCb, errorCb, downstreamPromise } =
        this._handlerGroups.shift();
      if (this._state === "fulfilled") {
        if (successCb) {
          try {
            const result = successCb(this._value);
            if (result instanceof $Promise) {
              result.then(
                downstreamPromise._internalResolve,
                downstreamPromise._internalReject
              );
            } else {
              downstreamPromise._internalResolve(result);
            }
          } catch (err) {
            downstreamPromise._internalReject(err);
          }
        } else {
          downstreamPromise._internalResolve(this._value);
        }
      } else if (this._state === "rejected") {
        if (errorCb) {
          try {
            const result = errorCb(this._value);
            if (result instanceof $Promise) {
              result.then(
                downstreamPromise._internalResolve,
                downstreamPromise._internalReject
              );
            } else {
              downstreamPromise._internalResolve(result);
            }
          } catch (err) {
            downstreamPromise._internalReject(err);
          }
        } else {
          downstreamPromise._internalReject(this._value);
        }
      }
    }
  }
}

module.exports = $Promise;
/*-------------------------------------------------------
El spec fue diseñado para funcionar con Test'Em, por lo tanto no necesitamos
realmente usar module.exports. Pero aquí está para referencia:

module.exports = $Promise;

Entonces en proyectos Node podemos esribir cosas como estas:

var Promise = require('pledge');
…
var promise = new Promise(function (resolve, reject) { … });
--------------------------------------------------------*/
