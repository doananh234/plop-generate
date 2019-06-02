'use strict';

class BaseControllerCRUD {
  constructor(service) {
    this.service = service;
  }

  async getMany(request) {
    try {
      return await this.service.getMany(request.query);
    } catch (err) {
      throw err;
    }
  };

  async count(request) {
    try {
      return await this.service.count();
    } catch (err) {
      throw err;
    }
  };

  async getOne(request) {
    try {
      const {
        id
      } = request.params;
      return await this.service.getOne(id);
    } catch (err) {
      throw err;
    }
  };

  async createOne(request) {
    try {
      const {
        payload
      } = request;
      return await this.service.createOne(payload);
    } catch (err) {
      throw err;
    }
  };

  async updateOne(request) {
    try {
      const {
        params,
        payload
      } = request;
      const {
        id
      } = params;
      return await this.service.updateOne(id, payload);
    } catch (err) {
      throw err;
    }
  };

  async deleteOne(request) {
    try {
      const {
        id
      } = request.params;
      return await this.service.deleteOne(id);
    } catch (err) {
      throw err;
    }
  };
}

module.exports = BaseControllerCRUD;
