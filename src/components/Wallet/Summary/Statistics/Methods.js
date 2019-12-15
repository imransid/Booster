   //this.requestReadWritePermission();
   if (Object.keys(this.props.flatCurrency).length == 0) {
    //ToastAndroid.show("Downloading latest conversion rates...", ToastAndroid.SHORT);
    this.props.flatCurrencyConverter();
}
else {
    //ToastAndroid.show("Calculated with latest conversion rates", ToastAndroid.SHORT);
}
this.getNecessaryData().then(data => {
    this.getDatabaseData().then(database => {
        let prevYears = [];
        let dataBaseData = JSON.parse(database);
        let thisYear = new Date().getFullYear();
        for (let i = 0; i < dataBaseData.length; i++) {
            let dateObj = new Date(dataBaseData[i].timestamp);
            let year = dateObj.getFullYear();
            if (year !== thisYear && !prevYears.includes(year))
                prevYears.push(year)
        }

        //lodash: Sorting years in descending so that, card are shown in descending order 
        let sortedPrevYears = _.sortBy(prevYears).reverse();

        this.setState({
            loading: false,
            data: dataBaseData,
            assetBase: data[0],
            assetBaseCharacter: currencyCharacter.character[data[0]],
            dateFormat: data[1],
            timeFormat: data[2],
            decimal: data[3],
            prevYears: sortedPrevYears,
            dataAvailable: dataBaseData.length > 0 ? true : false
        }, () => {
            this.today(this.props.flatCurrency);
            this.week(this.props.flatCurrency);
            this.month(this.props.flatCurrency);
            this.year(this.props.flatCurrency);
        })
    })
}).catch(err => {
    console.log("Error happened in summary");
    this.setState({
        loading: false,
        data: JSON.parse('[]'),
        assetBase: 'USD',
        assetBaseCharacter: currencyCharacter.character['USD'],
        dateFormat: 'DD/MM/YYYY',
        timeFormat: 'hh:mm A',
        decimal: true
    }, () => {
        this.today(this.props.flatCurrency);
        this.week(this.props.flatCurrency);
        this.month(this.props.flatCurrency);
        this.year(this.props.flatCurrency);
    })
})