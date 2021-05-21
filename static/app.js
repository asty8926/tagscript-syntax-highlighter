jQuery(document).ready(function () {
	jQuery('[data-toggle="tooltip"]').tooltip();
});

$(function () {
	$('[data-toggle="tooltip"]').tooltip();
});

var model = {
	input: ''
};

new Vue({
	el: '#app',
	data: () => {
		return model
	},
	computed: {
		countBrackets() {
			/* Example to count the occurrences of a string in a string.
			var theString = "This is a string.";
			console.log(theString.split("is").length - 1);
			*/
			var output = ''
			var balanced = "✓ Balanced"
			var unbalanced = "❌ Unbalanced"
			var opening = (this.input.split("{").length - 1)
			var closing = (this.input.split("}").length - 1)
			// Returns balanced if opening is equal to closing, otherwise unbalanced
			return (opening == closing) ? balanced : unbalanced
		},
		countChars() {
			var chars = (this.input.split('').length)
			return chars
		},
		countLines() {
			var split = this.input.split("\n")
			var lines = split.length
			return lines
		},
		copyClipboard() {
			this.input.select()
			document.execCommand("copy")
		}

	}
});

CodeMirror.defineSimpleMode("tse", {
	start: [{
			regex: /\d*\.?\d+/g,
			token: "numbers"
		},
		{
			regex: /({=\(comment\):).*}/gi,
			token: "comment"
		},
		{
			regex: /\{/g,
			token: "lb brackets"
		},
		{
			regex: /\}/g,
			token: "rb brackets"
		},
		{
			regex: /\(/g,
			token: "lp operators"
		},
		{
			regex: /\)/g,
			token: "rp operators"
		},
		{
			regex: /\:/g,
			token: "colon operators"
		},
		{
			regex: /(==|!=|(?<!>)<=|\||\+|(?<!<?)\/|\*|~|,|__|\^)/g,
			token: "operators"
		},
		{
			regex: /(m|math|\+|m)(?=(\:|\(|\}))/g,
			token: "block mathblock"
		},
		{
			regex: /(unix|uses|args|message|join|replace|if|any|all|and|or|break|contains|strf|#|random|rand|urlencode|td|index|list|cycle|=|let|assign|in|upper|lower|50:|c|cmd|redirect|require|blacklist|react|reactu|dm|delete|silent|silence|override|lvl|range)(?=(\:|\(|\}))/g,
			token: "blocks"
		},
		{
			regex: /(user|target|server)(?=(\:|\(|\}))/g,
			token: "blocks canparam"
		},
		{
			regex: /(avatar|id|created_at|joined_at|roleids|color|name|proper|position|icon|owner|randomonline|randomoffline|members|bots|humans|roles|channels|topic|slowmode|mention)(?=\))/g,
			token: "parameters"
		},
		{
			regex: /(trunc|round|abs)/g,
			token: "math"
		},
		{
			regex: /(true|false)/g,
			token: "boolean"
		},
		{
			regex: /(https?)/g,
			token: "http"
		},
		{
			regex: /(%a|%A|%w|%d|%-d|%b|%B|%m|%-m|%y|%Y|%H|%-H|%I|%-I|%p|%M|%-M|%S|%-S|%f|%z|%Z|%j|%-j|%U|%W|%c|%x|%X|%u|%n|%i|%s)/g,
			token: "strf"
		}, {
			regex: /.+?/,
			token: "text"
		}
	],
});

var editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
	mode: 'tse',
	theme: 'tse'
});

editor.on('change', function () {
	model.input = editor.getValue();
});