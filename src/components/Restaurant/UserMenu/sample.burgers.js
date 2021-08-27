import lang from 'sample.lang'

const burgers = {
  'burger1': {
    //id: '1',
    name: lang.burgersNames.cheese,
    desc: 'Три рубленных бифштекса из натуральной говядины на карамелизованной булочке, с тремя ломтиками сыра «Чеддер», ' +
    'кетчупом, горчицей, луком и маринованными огурчиками.',
    cost: 200,
    img: 'cheeseburger.png',
    status: 'disable'
  },
  'burger2': {
    //id: '2',
    name: lang.burgersNames.chicken,
    desc: 'Сочная куриная котлета в хрустящей панировке заправленная ароматным соусом с нотками чеснока, сыр "Чеддер", ' +
    'ароматный бекон, ломтик помидора, свежий салат, маринованные огурчики и, конечно, та самая булочка с кунжутом',
    cost: 200,
    img: 'chickenburger.png',
    status: 'disable'
  },
  'burger3': {
    //id: '3',
    name: lang.burgersNames.fish,
    desc: 'Филе хорошо прожаренной рыбы (семейства тресковых), которое подается на пышной пропаренной булочке с ' +
    'половинкой кусочка сыра «Чеддер», заправленной специальным соусом «Тар-Тар».',
    cost: 200,
    img: 'fishburger.png',
    status: 'disable'
  },
  'burger4': {
    //id: '4',
    name: lang.burgersNames.gam,
    desc: 'Рубленый бифштекс из 100% говядины, приправленный солью и перцем на гриле, карамелизованная булочка с ' +
    'кетчупом, горчицей, луком и маринованным огурчиком.',
    cost: 200,
    img: 'gamburger.png',
    status: 'disable'
  }
}

export default burgers
