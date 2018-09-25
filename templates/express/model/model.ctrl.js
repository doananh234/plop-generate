"use strict";
let {{upperCaseFirstChartWithPluralize name}} = require('./{{pluralize name}}.model'),
  HTTPStatus = require('../../helpers/lib/http_status');

let sendJSONResponse = function (res, status, content) {
  res.status(status);
  res.json(content);
};

const create = (req, res) => {
  if (!req.user.isAdmin())
    return sendJSONResponse(res, HTTPStatus.UNAUTHORIZED, {
      success: false,
      message: 'Permission Denied'
    })
  let data = req.body
  // replace require params

  req.getValidationResult().then(function (result) {
    if (!result.isEmpty()) {
      var error = result.useFirstErrorOnly().array()[0].msg;
      return res.status(HTTPStatus.BAD_REQUEST).json({
        success: false,
        message: error
      });
    }
    else {
      let {{pluralize name}} = new {{upperCaseFirstChartWithPluralize name}}(data);
      {{pluralize name}}.save((err, docs) => {
        if (err)
          return sendJSONResponse(res, HTTPStatus.INTERNAL_SERVER_ERROR, {
            success: false,
            message: err
          })
        sendJSONResponse(res, HTTPStatus.CREATED, {
          success: true,
          message: 'Create successfully!',
          data: docs
        })
      })
    }
  })
}

const all = (req, res) => {
  let query = req.query || {}

  const page = req.query.page
  const limit = req.query.limit
  const sort = req.query.sort || 'order'
  if (req.query.id)
    query['_id'] = req.query.id

  delete req.query.sort
  delete req.query.page
  delete req.query.limit
  delete req.query.id

  {{upperCaseFirstChartWithPluralize name}}.paginate(
    query,
    {
      page: page,
      limit: limit,
      sort: sort,
      lean: true,
    },
    function (err, docs) {
      if (err)
        return sendJSONResponse(res, HTTPStatus.INTERNAL_SERVER_ERROR, {
          success: false,
          message: err
        });
      let results = {
        success: true,
        data: docs.docs,
        total: docs.total,
        limit: docs.limit,
        page: docs.page,
        pages: docs.pages
      };
      sendJSONResponse(res, HTTPStatus.OK, results);
    }
  )
}

const get = (req, res) => {
  {{upperCaseFirstChartWithPluralize name}}.findById(req.params.id, (err, docs) => {
    if (err) {
      return sendJSONResponse(res, HTTPStatus.INTERNAL_SERVER_ERROR, {
        success: false,
        message: err
      })
    }
    if (!docs) {
      return sendJSONResponse(res, HTTPStatus.NOT_FOUND, {
        success: false,
        message: 'Not Found'
      })
    }
    return sendJSONResponse(res, HTTPStatus.OK, {
      success: true,
      data: docs
    })
  })
}

const patch = (req, res) => {
  if (!req.user.isAdmin())
    return sendJSONResponse(res, HTTPStatus.UNAUTHORIZED, {
      success: false,
      message: 'Permission Denied'
    })
  let data = req.body

  {{upperCaseFirstChartWithPluralize name}}.findByIdAndUpdate(req.params.id, {$set: data}, {new: true}, function (err, docs) {
    if (err) {
      return sendJSONResponse(res, HTTPStatus.INTERNAL_SERVER_ERROR, {
        success: false,
        message: err
      })
    }
    if (!docs) {
      return sendJSONResponse(res, HTTPStatus.NOT_FOUND, {
        success: false,
        message: 'Not found'
      })
    }
    return sendJSONResponse(res, HTTPStatus.OK, {
      success: true,
      message: 'Update Successfully!',
      data: docs
    })
  });
}

const remove = (req, res) => {
  if (!req.user.isAdmin())
    return sendJSONResponse(res, HTTPStatus.UNAUTHORIZED, {
      success: false,
      message: 'Permission Denied'
    })
  {{upperCaseFirstChartWithPluralize name}}.findByIdAndRemove(req.params.id, (err, docs) => {
    if (err) {
      return sendJSONResponse(res, HTTPStatus.INTERNAL_SERVER_ERROR, {
        success: false,
        message: err
      })
    }
    if (!docs) {
      return sendJSONResponse(res, HTTPStatus.NOT_FOUND, {
        success: false,
        message: 'Not found!'
      })
    }
    return sendJSONResponse(res, HTTPStatus.NO_CONTENT, {
      success: true
    })
  })
}

exports.default = {
  create,
  all,
  get,
  patch,
  remove
}