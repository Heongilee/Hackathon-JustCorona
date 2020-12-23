from python_graphql_client import GraphqlClient;
import asyncio

client = GraphqlClient(endpoint="http://hackathon-graphql.run.goorm.io/")
query = """
    query {
      getCoronaItems(startCreateDt: "20200302", endCreateDt: "20201222") {
        createDt
        gubun
        defCnt
      }
    }
"""
variables = {"createDt", "gubun", "defCnt"}

data = asyncio.run(client.execute_async(query=query, variables=variables))
print(data)