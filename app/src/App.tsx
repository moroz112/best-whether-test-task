import * as React from 'react';
import {connect} from 'react-redux';
import {
    fetchCitiesData,
    fetchCityById,
    fetchBestCity
} from "./actions";
import { AppProps, City } from "./types";
import './App.css';
import {Citylist} from "./components/citylist";

interface MapStateToPropsI {
    cities: Array<City>,
    cityMain: any,
    loading: boolean,
    bestcity: any
}

interface MapDispatchToPropsI {
    fetchCitiesData: Function,
    fetchCityById: Function,
    fetchBestCity: Function
}

class App extends React.Component<AppProps> {

    componentDidMount() {
        this.props.fetchCitiesData()
    }

    render() {
        const {
            cities,
            cityMain,
            bestcity,
            loading,
            fetchCityById,
            fetchBestCity
        } = this.props;


        return (
            <div className="App">
                <Citylist selectHandler={fetchCityById} cities={cities} cityMain={cityMain}/>

                <div className="selected-city-info">
                    <button onClick={fetchBestCity.bind(this, cities)}>Get city with best temperature</button>
                    {
                        loading && <div>
                            Please wait we calculate city with best temperature.
                            Meanwhile you can click on any city and get its temperature
                        </div>
                    }
                    {
                        <div className="best-city">
                            {bestcity && <div><div>City with best temp in the world:</div> {bestcity.name} Temp: {bestcity.main.temp}</div>}
                        </div>
                    }
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    cities: state.cities,
    cityMain: state.city,
    bestcity: state.bestcity,
    loading: state.loading
});

const mapDispatchToProps = {
    fetchCitiesData,
    fetchCityById,
    fetchBestCity
};

export default connect<MapStateToPropsI, MapDispatchToPropsI>(mapStateToProps, mapDispatchToProps)(App);
