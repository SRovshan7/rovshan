// 1)
//создайте новый элемент и добавьте его в блок ниже с помощью append
{/* <div id='block'></div> */}
let p = document.createElement('p')
p.innerHTML = 'Hi!'
document.getElementById('block').append(p)

// 2)
//создайте новый элемент и добавьте его в блок ниже с помощью insertBefore
{/* <div id='block'></div> */}
let h3 = document.createElement('h3')
h3.innerHTML = 'Hello!'
document.getElementById('block').insertBefore(h3, p)

// 3)
//удалите тег 'p' из скрипта ниже с помощью DOM метода
{/* <div id='block'>
    <p>Some text</p>
</div> */}
//document.querySelector('#block p').remove()

// 4)
//замените тег 'p' на <i>Hello World</i>
{/* <div id='block'>
    <p>Some text</p>
</div> */}
// let i = document.createElement('i')
// i.innerHTML = 'Hello World'
// let p0 = document.querySelector('#block p')
// let block = document.getElementById('block')
// block.replaceChild(i, p0)

// 5)
//выведите в консоли коллекцию всех элементов с классом .block
console.log(document.getElementsByClassName('block'))

// 6)
//выведите в консоли первый элемент из ранее созданной коллекции
console.log(document.getElementsByClassName('block')[0])
// 7)
//выведите в консоли количество элементов в ранее созданной коллекции
console.log(document.getElementsByClassName('block').length)

// 8)
//в чем разница между nodeList и HtmlCollection
//В nodeList - узлы документа, а в HtmlCollection - сами элементы. В nodeList доступ к элементам можно получить только по их порядковому номеру, а в HTMLCollection - по их имени, идентификатору или номеру индекса.