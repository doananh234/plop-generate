import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List, Spin } from 'antd';
import MapUI from '../../components/common/Map';
import { retrieveList } from '../../redux/rest/actions';
import HomeWrapper from './style';
import EmergencyItem from './components/EmergencyItem';
import { getEmergencies } from '../../redux/emergency/selectors';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      hasMore: true,
    };
    this.listView = React.createRef();
    this.currentItem = React.createRef();
  }
  componentDidMount() {
    this.props.retrieveEmergencies();
    this.props.retrieveEmergencyTypes();
  }

  componentDidUpdate = () => {
    if (this.currentItem && this.currentItem.scrollIntoView) {
      this.currentItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  onClickItem = item => {
    if (!item) {
      this.currentItem = React.createRef();
    }
    this.setState({ currentItem: item });
  };

  render() {
    const { emergencies } = this.props;
    const { currentItem } = this.state;
    return (
      <HomeWrapper>
        <div className="viewList">
          <List
            ref={ref => {
              this.listView = ref;
            }}
            dataSource={emergencies}
            renderItem={item => (
              <EmergencyItem
                refFunc={ref => {
                  if (currentItem && item.id === currentItem.id) {
                    this.currentItem = ref;
                  }
                }}
                isSelected={currentItem && item.id === currentItem.id}
                key={item.id}
                item={item}
                onClick={() => this.onClickItem(item)}
              />
            )}
          >
            {this.state.loading &&
              this.state.hasMore && (
                <div className="demo-loading-container">
                  <Spin />
                </div>
              )}
          </List>
        </div>
        <div className="mapContainer">
          <MapUI
            onClick={this.onClickItem}
            markers={[...this.props.emergencies]}
            currentItem={this.state.currentItem}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDGZOhb6qWmy1PLYJrLmtBho18Vasw0C_U&v=3.exp&libraries=,drawing"
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<div className="mapView" />}
            mapElement={<div style={{ height: '100%' }} />}
          />
        </div>
      </HomeWrapper>
    );
  }
}

Home.propTypes = {
  emergencies: PropTypes.array,
  retrieveEmergencies: PropTypes.func,
  retrieveEmergencyTypes: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    locale: state.LanguageSwitcher.language.locale,
    loading: state.loading.isMainLoading,
    emergencies: getEmergencies(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    retrieveEmergencies: () => dispatch(retrieveList('Emergency', { limit: 1000 })),
    retrieveEmergencyTypes: () => dispatch(retrieveList('EmergencyType', { limit: 1000 })),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
