const fetch = require("node-fetch");

async function convert(path) {
		const result = await fetch(
			`https://jsonplaceholder.typicode.com${path}`
		);
		const data = await result.json();
		return data;
}

//convert('/posts')
//	.then(data => console.log(data));

test('test api call', async() => {
	fetchMock = require('jest-fetch-mock');
	//jest.mock('node-fetch', () => require('fetch-mock-jest').sandbox());
	//cosnt fetchMock = require(
	fetchMock.mockResponseOnce(JSON.stringify({ hello: 1 }));
	const data = await convert('/posts');
	expect(data[0]['id']).toEqual(1);
})
