import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.style.less';
class Home extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        const { dispatch } = this.props;
        dispatch({ type: 'GET_DATA' });
    }

    render() {
        console.log('render', this.props.data);
        const { classes } = this.props;
        return (
            <div className="HomeContainer">
                <div class="owl-item active">
                    <a
                        className="owl-item bliss"
                        href="https://dosist.com?page_id=3967"
                        target="_self"
                    >
                        {' '}
                        <div className="productContainer">
                            <img src="https://dosist.com/wp-content/uploads/2019/01/2876-26C-UNK_HMT-RGB-HUM_NY_J16_0005_FOUR_PACKAGE_RGB_300DPI_V7_BLISS-1024x926.jpg" />{' '}
                        </div>{' '}
                    </a>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.home.data
    };
};
export default connect(mapStateToProps)(Home);
