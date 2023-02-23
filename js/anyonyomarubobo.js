'use strict';

const gen = document.getElementById('gen');
const uouo = document.getElementById('uouo');
const uolen = document.getElementById('uolen');
const copy = document.getElementById('copy');
const twitter = document.getElementById('twitter');

const nekokawatab = [
	'あにょにょ', 'まるぼぼ', 'あにょ', 'まる', 'ぼぼ',
	'にょ', 'ま', 'る',
];

function generateNekokawa()
{
	const uouomax = +uolen.value;
	uouo.textContent = '';
	for (let i = 0; i < uouomax; i++) {
		let index = Math.floor(Math.random() * nekokawatab.length);
		uouo.textContent += nekokawatab[index];
	}
}

function copier()
{
	uouo.select();
	document.execCommand('copy');
}

function twitterer()
{
	const nekokawaURI = 'https://kusaremkn.github.io/anyonyomarubobo/';
	if (uouo.value.length === 0)
		window.alert('あにょにょまるぼぼを忘れていませんか？');
	window.open('https://twitter.com/intent/tweet/?text='
			+ encodeURIComponent(uouo.value)
			+ '&url=' + encodeURIComponent(nekokawaURI));
}

gen.addEventListener('click', generateNekokawa);
copy.addEventListener('click', copier);
twitter.addEventListener('click', twitterer);
