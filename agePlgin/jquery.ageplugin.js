/*! jQuery agePlugin Developed by Jubayer Shamshed | Anyone can edit. If you find helpfull please thanks me in your documentation.
 * mail: j3shamshed@yahoo.com .
 * Special Thanks http://www.myinkblog.com/author/giulio-bai/*/


	jQuery.ageCalculate=function(yr,mon,day,unit,decimal,round) {
		
		var one_day=1000*60*60*24;
		var one_month=1000*60*60*24*30;
		var one_year=1000*60*60*24*30*12;
		//year should be a valid full year (ie: 1978)
		//month should an integer from 1 to 12
		//day should be a valid day of the month
		//unit specifies the unit to display the age in. Valid values are "years", "months", or "days"
		//decimals specifies the number of trailing decimals. Valid values are 0 and above
		//rounding specifies whether to round up or down the age. Valid values are "roundup" or "rounddown"
		
		today=new Date();
		var pastdate=new Date(yr, mon-1, day);

		var countunit=unit;
		var decimals=decimal;
		var rounding=round;
		
		var finalunit=(countunit=="days")? one_day : (countunit=="months")? one_month : one_year;
		decimals=(decimals<=0)? 1 : decimals*10;

		if (unit!="years"){
		if (rounding=="rounddown")
		return (Math.floor((today.getTime()-pastdate.getTime())/(finalunit)*decimals)/decimals+" "+countunit);
		else
		return (Math.ceil((today.getTime()-pastdate.getTime())/(finalunit)*decimals)/decimals+" "+countunit);
		}
		else{
		var yearspast=today.getFullYear()-yr-1;
		var tail=(today.getMonth()>mon-1 || today.getMonth()==mon-1 && today.getDate()>=day)? 1 : 0;
		pastdate.setFullYear(today.getFullYear());
		var pastdate2=new Date(today.getFullYear()-1, mon-1, day);
		tail=(tail==1)? tail+Math.floor((today.getTime()-pastdate.getTime())/(finalunit)*decimals)/decimals : Math.floor((today.getTime()-pastdate2.getTime())/(finalunit)*decimals)/decimals;
		return(yearspast+tail+" "+countunit);
		}
		

		//Sample usage
		//displayage (year, month, day, unit, decimals, rounding)
		//Unit can be "years", "months", or "days"
		//Decimals specifies demical places to round to (ie: 2)
		//Rounding can be "roundup" or "rounddown"

		//displayage(1997, 11, 24, "years", 0, "rounddown")
	};

