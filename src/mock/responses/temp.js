import Mock from 'mockjs'

const Random = Mock.Random


// 	let articles = []
// 	for (let i = 0; i < 100; i++) {
// 		articles.push({
// 			title: Random.csentence(5, 30),
// 			thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'),
// 			author_name: Random.cname(),
// 			date: Random.date() + ' ' + Random.time()
// 		})
// 	}



const foo = {
	foo: Random.string( 10 )
}

const bar = {
	bar: 'bar'
}

export { foo, bar }
