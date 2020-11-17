import BaseModel from './BaseModel';

class {{upperCaseFirstChart name}} extends BaseModel {
  static get tableName() {
    return '{{snakeCase name}}';
  }
  
  $beforeInsert() {
    this.createdAt = new Date().toISOString();
    this.updatedAt = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }

  // static get relationMappings() {
  //   return {

  //   };
  // }

  // static get arrayRelationMappings() {
  //   return {
  //     products: {
  //       key: 'dataId',
  //       as: 'renameData',
  //       relatedModel: 'modelName',
  //     },
  // }
}

export default {{upperCaseFirstChart name}};
