$(document).ready(function () {
	$('[data-toggle="tooltip"]').tooltip();
});

$(function () {
	$('[data-toggle="tooltip"]').tooltip();
});


function balancedText(input) {
	const stack = [];
	
	for (let i = 0; i < input.length; i++) {
		const char = input[i];

		if (char === '{' && input[i - 1] !== '\\') {
			stack.push('{');
			continue;
		}
		if (char === '}' && input[i - 1] !== '\\' && !stack.pop()) {
			return false;
		}
	}

	return stack.length === 0;
}

function lineCount(input) {
	let count = 0;
	for (const char of input) {
		if (char === '\n') count++;
	}
	return count + 1;
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

const editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
	mode: 'tse',
	theme: 'tse',
	lineWrapping: true,
});

const BALANCED_EL = document.getElementById('balanced');
const LINES_EL = document.getElementById('lines');
const CHARS_EL = document.getElementById('chars');

function update() {
	const input = editor.getValue();
	const balanced = balancedText(input);

	const lines = lineCount(input);

	BALANCED_EL.textContent = balanced ? '✓ Balanced' : '❌ Unbalanced';
	LINES_EL.textContent = lines;
	CHARS_EL.textContent = input.length;
}
update();

editor.on('change', update);
