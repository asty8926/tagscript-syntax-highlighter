

jQuery(document).ready(function () {
	jQuery('[data-toggle="tooltip"]').tooltip();
  });

new Vue({
	el: "#app",
	data: {
		input: '',
		code: '',
		docs: {
			blocks: {
				unix: {
					title: "Unix",
					description: "Current Unix time, useful for math blocks. This only works in Tags.",
					link: "#default-variables"
				}
			}
		},
		categories: {
			// MetaCharacters to espace:
			// . [ { ( ) \ ^ $ | ? * +
			numbers: /\d+/g,
			backtiles: /`.+`/g,
			comments: /({=\(comment\):).*}/gi,
			brackets: /\{|\}/g,
			operators: /(==|!=|(?<!<\/span)>=|(?<!>)<=|\||\+|(?<!<?)\/|\*|~|,|\(|\)|__|\^|(?<!data?|original?|tooltip|rounded|(class=").+)-|:)/g,
			blocks: /(?<=(\{).+<span.+)(unix|uses|args|message|user|target|server|join|replace|if|any|all|and|or|break|contains|strf|#|random|rand|urlencode|td|index|list|cycle|=|let|assign|in|upper|lower|m|math|50:|c|cmd|redirect|require|blacklist|react|reactu|dm|delete|silence|override|lvl|range)(?=<span.+(\:|\(|\}))+/g,
			parameters: /(?<=(\()<span.+)(avatar|id|created_at|joined_at|roleids|color|name|proper|position|icon|owner|randomonline|randomoffline|members|bots|humans|roles|channels|topic|slowmode|mention|trunc|round|abs)(?=<span.+\))/g,
			boolean: /(true|false)/g,
			strf: /(%a|%A|%w|%d|%-d|%b|%B|%m|%-m|%y|%Y|%H|%-H|%I|%-I|%p|%M|%-M|%S|%-S|%f|%z|%Z|%j|%-j|%U|%W|%c|%x|%X|%u|%n|%i|%s)/g,
			http: /(https?)/g
			}
	},
	methods: {
		highlight() {
			if (!this.input) {
				//console.log("Input is empty.")
				return '<p style="color: #ACB4BC;">It will be highlighted here</p>'
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
					return `<span class="${key} tooltip-c">${match}<span class="tooltip-container rounded"><span class="tooltip-header rounded-top"><a href="#" target="_blank">Bracket &nbsp;&#10095;</a></span><span class="tooltip-text"><b>Brackets</b> are what encloses blocks in TagScript.</span></span></span>`
				})
			}
			//console.log(output)
			return output
		 },
		 updCode(e) {
			// console.log(this.$refs.code.innerText)
			// this.code = this.$refs.code.innerHTML
			// console.log(this.code)
			// return this.code
			var text = e.target.innerText
			console.log(text)
			//this.code = e.target.innerHTML
			//console.log(this.code)
		 },
		 hlCode() {
			 // Duplicate of the highlight() method, except for the contenteditable div. Test for now.
			var output = this.$refs.code.innerHTML
			console.log(output)
			if (!output) {
				//console.log("Input is empty.")
				return '<p style="color: #ACB4BC;">It will be highlighted here</p>'
			}
			console.log(output)
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
			//console.log(output)
			return output
		 },
		escapeRegExp(stringToGoIntoTheRegex) {
			// Currently unused, due to how I actually formatted each regex group well
			return stringToGoIntoTheRegex.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
		},
		autoHeight() {
			// Sets the auto-height for our code textarea to match the output's!
			const minHeight = 85 // Minimum height of our textarea, in pixels (px)
			const maxWidth = 472
			var tarea = this.$refs.input
			//console.log(tarea.scrollHeight)

			var output = this.$refs.output

			//var newHeight = (tarea.scrollHeight < minHeight ? minHeight : tarea.scrollHeight) + "px"
			var newHeight = ((tarea.scrollHeight < minHeight || this.input === '') ? minHeight : output.clientHeight) + "px"
			tarea.style.height = newHeight
			tarea.style.width = maxWidth
			//console.log(`New height: ${newHeight}`)
		}
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
			output = (opening == closing) ? balanced : unbalanced
			return output
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
})
