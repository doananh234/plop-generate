import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { CurrentPageTitle, PrevPageTitle } from './styles';

const CustomBreadcrumb = props => (
  <Breadcrumb>
    {props.data.map((data, index) => (
      <Breadcrumb.Item key={data.path}>
        <Link href={data.path} to={data.path}>
          {index === props.data.length - 1 ? (
            <CurrentPageTitle>{data.title}</CurrentPageTitle>
          ) : (
            <PrevPageTitle>{data.title}</PrevPageTitle>
          )}
        </Link>
      </Breadcrumb.Item>
    ))}
  </Breadcrumb>
);

CustomBreadcrumb.propTypes = {
  data: PropTypes.array,
};
export default CustomBreadcrumb;
