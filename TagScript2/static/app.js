
new Vue({
	el: "#app",
	data: {
		input: '',
		tempout: '',
	categories: {
		// MetaCharacters to espace:
		// . [ { ( ) \ ^ $ | ? * +
		backtiles: /`.+`/g,
		comments: /({=\(COMMENT\):.+\})/g,
		brackets: /\{|\}/g,
		operators: /(==|!=|(?<!<\/span)>=|(?<!>)<=|\||\+|(?<!<?)\/|\*|~|,|\(|\)|__|\^|-|:)/g,
		blocks: /(?<=\{<\/span>)(unix|uses|args|user|target|server|join|replace|if|any|all|and|or|break|contains|strf|#|random|rand|urlencode|td|index|list|cycle|=|let|assign|in|upper|lower|m|math|50|c|cmd|redirect|require|blacklist|react|reactu|dm|delete|silence|override|lvl|range)(?=\}|<span class="operators">\(?|:)/g,
		parameters: /(?<=\(|\(<\/span>)(avatar|id|created_at|joined_at|roleids|color|name|proper|position|icon|owner|randomonline|randomoffline|members|bots|humans|roles|channels|topic|slowmode|mention|trunc|round|abs)(?=\)|<span)/g,
		boolean: /(true|false)/g,
		strf: /(%a|%A|%w|%d|%-d|%b|%B|%m|%-m|%y|%Y|%H|%-H|%I|%-I|%p|%M|%-M|%S|%-S|%f|%z|%Z|%j|%-j|%U|%W|%c|%x|%X|%u|%n|%i|%s)/g,
		http: /(https?)/g
		}
	},
	methods: {
		highlight() {
			if (!this.input) {
				console.log("Input is empty.")
				return this.input
			}
			var output = this.input;
			for (const [key, value] of Object.entries(this.categories)) {
				//console.log(`key: ${key}, value: ${value}`)
				// Sanitizing the regex
				/* var sanitized = this.escapeRegExp(value)
				console.log(sanitized)
				var regex = new RegExp(sanitized, 'g')
				console.log(regex) */

				//var regex = new RegExp(value, 'g')

				// Regex match example there: https://stackoverflow.com/questions/17885855/use-dynamic-variable-string-as-regex-pattern-in-javascript/17886301
				output = output.replace(value, match => {
					//console.log(`key: ${key}, match: ${match}`)
					return `<span class="${key}">${match}</span>`
				})
			}
			console.log(output)
			return output
			// Sanitizing the regex
			/* var sanitized = this.escapeRegExp(this.categories.brackets)
			console.log(`should return brackets: ${this.categories.brackets}`)
			var regex = new RegExp(sanitized, 'g')
			console.log(regex)
			return this.input.replace(regex, match => {
				console.log("Does it even display this?")
				return `<span class="brackets">${match}</span>`
			}) */
		 },
		escapeRegExp(stringToGoIntoTheRegex) {
			return stringToGoIntoTheRegex.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
		}
	},
	computed: {
		
	}
})