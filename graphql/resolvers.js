import { getCoronaItems, findCityConfirmedCnt } from "./db.js";

const resolvers = {
	Query: {
		getCoronaItems: (_, { startCreateDt, endCreateDt }) => getCoronaItems(startCreateDt, endCreateDt),
		findCityConfirmedCnt: (_, { gubun, startCreateDt, endCreateDt }) => findCityConfirmedCnt(gubun, startCreateDt, endCreateDt)
	}
};

export default resolvers;