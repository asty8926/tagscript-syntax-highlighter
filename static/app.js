$(document).ready(function () {
	$('[data-toggle="tooltip"]').tooltip();
});

$(function () {
	$('[data-toggle="tooltip"]').tooltip();
});

let input = '';

function balancedText() {
	/* Example to count the occurrences of a string in a string.
		var theString = "This is a string.";
		console.log(theString.split("is").length - 1);
		*/
	var balanced = '✓ Balanced';
	var unbalanced = '❌ Unbalanced';
	var opening = input.split('{').length - 1;
	var closing = input.split('}').length - 1;
	// Returns balanced if opening is equal to closing, otherwise unbalanced
	return opening === closing ? balanced : unbalanced;
}

function charCount() {
	return input.length;
}

function lineCount() {
	return input.split('\n').length;
}

function copy() {
	this.input.select();
	document.execCommand('copy');
}

CodeMirror.defineSimpleMode('tse', {
	start: [
		{
			regex: /\d*\.?\d+/g,
			token: 'numbers',
		},
		{
			regex: /({=\(comment\):).*}/gi,
			token: 'comment',
		},
		{
			regex: /\{/g,
			token: 'lb brackets',
		},
		{
			regex: /\}/g,
			token: 'rb brackets',
		},
		{
			regex: /\(/g,
			token: 'lp operators',
		},
		{
			regex: /\)/g,
			token: 'rp operators',
		},
		{
			regex: /:/g,
			token: 'colon operators',
		},
		{
			regex: /(==|!=|>=?|<=?|[+\-*/%^])/g,
			token: 'operators',
		},
		{
			regex: /(m|math|\+|m)(?=(:|\(|\}))/g,
			token: 'blocks mathblock',
		},
		{
			regex:
				/(unix|uses|args|message|join|replace|if|any|all|and|or|break|contains|strf|#|random|rand|urlencode|td|index|list|cycle|=|let|assign|in|upper|lower|50:|c|cmd|redirect|require|blacklist|react|reactu|dm|delete|silent|silence|override|lvl|range)(?=(:|\(|\}))/g,
			token: 'blocks',
		},
		{
			regex: /(user|target|server)(?=(:|\(|\}))/g,
			token: 'blocks canparam',
		},
		{
			regex:
				/(avatar|id|created_at|joined_at|roleids|color|name|proper|position|icon|owner|randomonline|randomoffline|members|bots|humans|roles|channels|topic|slowmode|mention)(?=\))/g,
			token: 'parameters',
		},
		{
			regex: /(trunc|round|abs)/g,
			token: 'math',
		},
		{
			regex: /(true|false)/g,
			token: 'boolean',
		},
		{
			regex: /(https?)/g,
			token: 'http',
		},
		{
			regex:
				/(%a|%A|%w|%d|%-d|%b|%B|%m|%-m|%y|%Y|%H|%-H|%I|%-I|%p|%M|%-M|%S|%-S|%f|%z|%Z|%j|%-j|%U|%W|%c|%x|%X|%u|%n|%i|%s)/g,
			token: 'strf',
		},
		{
			regex: /.+?/,
			token: 'text',
		},
	],
});

var editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
	mode: 'tse',
	theme: 'tse',
	lineWrapping: true,
});

const BALANCED_EL = document.getElementById('balanced');
const LINES_EL = document.getElementById('lines');
const CHARS_EL = document.getElementById('chars');

function update() {
	input = editor.getValue();
	let balanced = balancedText();
	let chars = charCount();
	let lines = lineCount();

	BALANCED_EL.textContent = balanced;
	LINES_EL.textContent = lines;
	CHARS_EL.textContent = chars;
}
update();

editor.on('change', update);
