'use strict';

const gen = document.getElementById('gen');
const uouo = document.getElementById('uouo');
const copy = document.getElementById('copy');
const twitter = document.getElementById('twitter');

const nekokawatab = [
	'ねこ', 'かわ', 'うお', 'うお',
	'ね', 'こ', 'か', 'わ', 'う', 'お',
];

function generateNekokawa()
{
	uouo.textContent = '';
	for (let i = 0; i < 50; i++) {
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
	const nekokawaURI = 'https://kusaremkn.github.io/nekokawauouo/';
	if (uouo.value.length === 0)
		window.alert('ねこかわ躍りを忘れていませんか？');
	window.open('https://twitter.com/intent/tweet/?text='
			+ encodeURIComponent(uouo.value)
			+ '&url=' + encodeURIComponent(nekokawaURI));
}

gen.addEventListener('click', generateNekokawa);
copy.addEventListener('click', copier);
twitter.addEventListener('click', twitterer);
