import * as React from 'react';
import Autocomplete from 'react-autocomplete';
import {City} from "../types";

interface CitylistProps {
    selectHandler: Function,
    cities: Array<City>,
    cityMain: {
        temp: number,
        humidity: number
    }
}

interface CityListState {
    value: string
}

export class Citylist extends React.Component<CitylistProps, CityListState> {
    state = {value: ''};

    constructor(props) {
        super(props);

        this.onSelect = this.onSelect.bind(this);
        this.onChange = this.onChange.bind(this);

    }

    onChange(e) {
        this.setState({value: e.target.value})
    }

    onSelect(val) {
        const { selectHandler } = this.props;
        this.setState({value: val}, () => {
            selectHandler(this.state.value)
        });
    }

    render() {
        const {cities, cityMain} = this.props;

        return (
            <div className="city-list">
                Please select city whose temperature you want to get:
                <Autocomplete
                    getItemValue={(item) => item.name}
                    items={cities ? cities : []}
                    renderItem={(city, isHighlighted) =>
                    city.name.toLowerCase().match(`^${this.state.value.toLowerCase()}`) ? <div style={{ background: isHighlighted ? 'lightgray' : 'white' }} key={city.id}>
                            {city.name}
                    </div> : <div key={city.id}>{null}</div>
                    }
                    value={this.state.value}
                    onChange={this.onChange}
                    onSelect={this.onSelect}
                />
                {cityMain && <div>Temperature of selected city:{cityMain.temp}</div>}
            </div>
        )
    }
}
