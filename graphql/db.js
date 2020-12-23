import fetch from "node-fetch";

const API_PREFIX = "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?";
const serviceKey = "53%2BVGqHRUDSOrCV%2FwXCt%2BxN5qubVlN5yNl%2BgDtEt%2B7uyT%2FKCBB07j0iiZPsXlQvI4zEOUgA7JoCJXmE3Y2AvSw%3D%3D";
const _type = "json";

export const findCityConfirmedCnt = async (gubun, startCreateDt, endCreateDt) => {
	let REQUEST_URL = API_PREFIX;
	let res;
	
	REQUEST_URL += `serviceKey=${serviceKey}`;
	REQUEST_URL += `&_type=${_type}`;
	REQUEST_URL += `&pageNo=1&numOfRows=10&startCreateDt=${startCreateDt}&endCreateDt=${endCreateDt}`;
	
	res = await fetch(`${REQUEST_URL}`)
		.then((res) => res.json())
		.then((json) => json.response.body.items.item);
	
	const filteredItem = res.filter(attr => attr.gubun === gubun);
	
	return filteredItem;
};

export const getCoronaItems = (startCreateDt, endCreateDt) => {
	let REQUEST_URL = API_PREFIX;
	
	REQUEST_URL += `serviceKey=${serviceKey}`;
	REQUEST_URL += `&_type=${_type}`;
	REQUEST_URL += `&pageNo=1&numOfRows=10&startCreateDt=${startCreateDt}&endCreateDt=${endCreateDt}`;
	
	return fetch(`${REQUEST_URL}`)
		.then((res) => res.json())
		.then((json) => json.response.body.items.item);
};