

// Only start doing stuff when all DOMs have been loaded on the page. Otherwise it runs into issues.
document.addEventListener('DOMContentLoaded', (event) => {
	// Seems to only work with ID, so let's do that instead.
	const textarea = document.getElementById('textareaid');

	//console.log(textarea.value);
	/*document.addEventListener('sl-input', event => {
		//console.log(textarea.value);
		let text = textarea.value;
		
		for (var category of Object.keys(cat)){
			let curList = cat[category];
			for (var block of curList) {
				let position = text.search(block);
				let afterText = text.slice(text[position]);
				let isAlreadySpan = afterText.substring(`${text[position]}</span>`);
				if (position != -1 && text[position] == "}") {
					console.log("test")
				}
			}
		}
	});*/

	const button = document.getElementById('submit')
	button.addEventListener('click', event => {
		let text = textarea.value;
		const formatted_obj = document.getElementById('formatted');
		let formatted_txt = "";
		console.log(text)
		
		/*for (var category of Object.keys(cat)) {
			let curList = cat[category];
			//console.log(`${category}`)
			for (var block of curList) {
				//let re = new RegExp(`${block}`, 'gi');
				//formatted_txt += text.replace(re, toFormat(category, re));
				//formatted_txt += text.replaceAll(block, toFormat(category, block))
				formatted_txt += text.split(block).join(toFormat(category, block));
				console.log(formatted_txt);
			}
		}*/
		formatted_txt = text.replaceAll("{", toFormat("brackets", "{"))
						.replaceAll("}", toFormat("brackets", "}"))
						
						.replaceAll("==", toFormat("operators", "=="))
						.replaceAll("!=", toFormat("operators", "!="))
						//.replaceAll(">=", toFormat("operators", ">="))
						//.replaceAll("<=", toFormat("operators", "<="))
						.replaceAll("|", toFormat("operators", "|"))
						.replaceAll("+", toFormat("operators", "+"))
						//.replaceAll("/", toFormat("operators", "/"))
						.replaceAll("*", toFormat("operators", "*"))
						.replaceAll("~", toFormat("operators", "~"))
						.replaceAll(",", toFormat("operators", ","))
						.replaceAll("(", toFormat("operators", "("))
						.replaceAll(")", toFormat("operators", ")"))
						.replaceAll("__", toFormat("operators", "__"))
						.replaceAll("^", toFormat("operators", "^"))
						.replaceAll("-", toFormat("operators", "-"))
						.replaceAll(":", toFormat("operators", ":"))

						.replaceAll("unix", toFormat("blocks", "unix"))
						.replaceAll("uses", toFormat("blocks", "uses"))
						.replaceAll("args", toFormat("blocks", "args"))
						.replaceAll("user", toFormat("blocks", "user"))
						.replaceAll("target", toFormat("blocks", "target"))
						.replaceAll("server", toFormat("blocks", "server"))
						.replaceAll("join", toFormat("blocks", "join"))
						.replaceAll("replace", toFormat("blocks", "replace"))
						.replaceAll("if", toFormat("blocks", "if"))
						.replaceAll("any", toFormat("blocks", "any"))
						.replaceAll("all", toFormat("blocks", "all"))
						.replaceAll("and", toFormat("blocks", "and"))
						//.replaceAll("or", toFormat("blocks", "or"))
						.replaceAll("break", toFormat("blocks", "break"))
						.replaceAll("contains", toFormat("blocks", "contains"))
						.replaceAll("strf", toFormat("blocks", "strf"))
						.replaceAll("#", toFormat("blocks", "#"))
						.replaceAll("random", toFormat("blocks", "random"))
						.replaceAll("rand", toFormat("blocks", "rand"))
						.replaceAll("urlencode", toFormat("blocks", "urlencode"))
						.replaceAll("td", toFormat("blocks", "td"))
						.replaceAll("index", toFormat("blocks", "index"))
						.replaceAll("list", toFormat("blocks", "list"))
						.replaceAll("cycle", toFormat("blocks", "cycle"))
						//.replaceAll("=", toFormat("blocks", "="))
						.replaceAll("let", toFormat("blocks", "let"))
						.replaceAll("assign", toFormat("blocks", "assign"))
						.replaceAll("in", toFormat("blocks", "in"))
						.replaceAll("upper", toFormat("blocks", "upper"))
						.replaceAll("lower", toFormat("blocks", "lower"))
						//.replaceAll("m", toFormat("blocks", "unix"))
						.replaceAll("math", toFormat("blocks", "math"))
						.replaceAll("50", toFormat("blocks", "50"))
						.replaceAll("cmd", toFormat("blocks", "cmd"))
						.replaceAll("redirect", toFormat("blocks", "redirect"))
						.replaceAll("require", toFormat("blocks", "require"))
						.replaceAll("blacklist", toFormat("blocks", "blacklist"))
						.replaceAll("react", toFormat("blocks", "react"))
						.replaceAll("reactu", toFormat("blocks", "reactu"))
						.replaceAll("dm", toFormat("blocks", "dm"))
						.replaceAll("delete", toFormat("blocks", "delete"))
						.replaceAll("silence", toFormat("blocks", "silence"))
						.replaceAll("override", toFormat("blocks", "override"))
						.replaceAll("lvl", toFormat("blocks", "lvl"))
						.replaceAll("range", toFormat("blocks", "range"))

						.replaceAll("avatar", toFormat("parameters", "avatar"))
						//.replaceAll("id", toFormat("parameters", "id"))
						.replaceAll("created_at", toFormat("parameters", "created_at"))
						.replaceAll("joined_at", toFormat("parameters", "joined_at"))
						.replaceAll("roleids", toFormat("parameters", "roleids"))
						.replaceAll("color", toFormat("parameters", "color"))
						.replaceAll("name", toFormat("parameters", "name"))
						.replaceAll("proper", toFormat("parameters", "proper"))
						.replaceAll("position", toFormat("parameters", "position"))
						.replaceAll("icon", toFormat("parameters", "icon"))
						.replaceAll("owner", toFormat("parameters", "owner"))
						.replaceAll("randomonline", toFormat("parameters", "randomonline"))
						.replaceAll("randomoffline", toFormat("parameters", "randomoffline"))
						.replaceAll("members", toFormat("parameters", "members"))
						.replaceAll("bots", toFormat("parameters", "bots"))
						.replaceAll("humans", toFormat("parameters", "humans"))
						.replaceAll("roles", toFormat("parameters", "roles"))
						.replaceAll("channels", toFormat("parameters", "channels"))
						.replaceAll("topic", toFormat("parameters", "topic"))
						.replaceAll("slowmode", toFormat("parameters", "slowmode"))
						.replaceAll("mention", toFormat("parameters", "mention"))
						.replaceAll("trunc", toFormat("parameters", "trunc"))
						.replaceAll("round", toFormat("parameters", "round"))
						.replaceAll("abs", toFormat("parameters", "abs"))

						.replaceAll("true", toFormat("boolean", "true"))
						.replaceAll("false", toFormat("boolean", "false"))

						.replaceAll("%a", toFormat("strf", "%a"))
						.replaceAll("%A", toFormat("strf", "%A"))
						.replaceAll("%w", toFormat("strf", "%w"))
						.replaceAll("%d", toFormat("strf", "%d"))
						.replaceAll("%-d", toFormat("strf", "%-d"))
						.replaceAll("%b", toFormat("strf", "%b"))
						.replaceAll("%B", toFormat("strf", "%B"))
						.replaceAll("%m", toFormat("strf", "%m"))
						.replaceAll("%-m", toFormat("strf", "%-m"))
						.replaceAll("%y", toFormat("strf", "%y"))
						.replaceAll("%Y", toFormat("strf", "%Y"))
						.replaceAll("%H", toFormat("strf", "%H"))
						.replaceAll("%-H", toFormat("strf", "%-H"))
						.replaceAll("%I", toFormat("strf", "%I"))
						.replaceAll("%-I", toFormat("strf", "%-I"))
						.replaceAll("%p", toFormat("strf", "%p"))
						.replaceAll("%M", toFormat("strf", "%M"))
						.replaceAll("%-M", toFormat("strf", "%-M"))
						.replaceAll("%S", toFormat("strf", "%S"))
						.replaceAll("%-S", toFormat("strf", "%-S"))
						.replaceAll("%f", toFormat("strf", "%f"))
						.replaceAll("%z", toFormat("strf", "%z"))
						.replaceAll("%Z", toFormat("strf", "%Z"))
						.replaceAll("%j", toFormat("strf", "%j"))
						.replaceAll("%-j", toFormat("strf", "%-j"))
						.replaceAll("%U", toFormat("strf", "%U"))
						.replaceAll("%W", toFormat("strf", "%W"))
						.replaceAll("%c", toFormat("strf", "%c"))
						.replaceAll("%x", toFormat("strf", "%x"))
						.replaceAll("%X", toFormat("strf", "%X"))
						.replaceAll("%u", toFormat("strf", "%u"))
						.replaceAll("%n", toFormat("strf", "%n"))
						.replaceAll("%i", toFormat("strf", "%i"))
						.replaceAll("%s", toFormat("strf", "%s"))

						.replaceAll("http", toFormat("http", "http"))
						.replaceAll("https", toFormat("http", "https"))
						
		
		formatted_obj.innerHTML = formatted_txt;
		console.log('Text changed')
	}
	)
});

// Highlighting categories
const cat = {'brackets': ['{', '}'],
			'operators': ['==', '!=', '>=', '<=', '|', '+', '/', '*', '~', ',', '(', ')', '__', '^', '-', ':'],
			'blocks': ['unix', 'uses', 'args', 'user', 'target', 'server', 'join', 'replace', 'if', 'any', 'all', 'and',
			'or', 'break', 'contains', 'strf', '#', 'random', 'rand', 'urlencode', 'td', 'index', 'list', 'cycle', '=',
			'let', 'assign', 'in', 'upper', 'lower', 'm', 'math', '50:', 'c', 'cmd', 'redirect', 'require', 'blacklist',
			'react', 'reactu', 'dm', 'delete', 'silence', 'override', 'lvl', 'range'],
			'parameters': ['avatar', 'id', 'created_at', 'joined_at', 'roleids', 'color', 'name', 'proper', 'position',
			'icon', 'owner', 'randomonline', 'randomoffline', 'members', 'bots', 'humans', 'roles', 'channels', 'topic', 'slowmode', 'mention', 'trunc', 'round', 'abs'],
			'boolean': ['true', 'false'],
			'strf': ['%a', '%A', '%w', '%d', '%-d', '%b', '%B', '%m', '%-m', '%y', '%Y', '%H', '%-H', '%I', '%-I', '%p', '%M',
			'%-M', '%S', '%-S', '%f', '%z', '%Z', '%j', '%-j', '%U', '%W', '%c', '%x', '%X', '%u', '%n', '%i', '%s'],
			'http': ['http', 'https']};

	/*const fox = document.getElementById('fox');
	const texterino = fox.innerText;
	const changed = texterino.replace(/fox/gi, 'fox fox fox');
	
	setTimeout(function() {
		fox.innerText = changed
		console.log("Text changed.")
	}, 5000);

  })*/

function toFormat(category, string) {
	let block = `<span id="${category}">${string}</span>`;
	return block;	
};

function returnCategory(string){
	for (var category of Object.keys(cat)) {
		let curList = cat[category];
		if (curList.includes(string) === true){
			return category;
		};
	};
};


//console.log(returnCategory('joined_at'))
// returns "parameters" ^^^^

//console.log(returnCategory('{=():joined_at}'))

//console.log(cat)

// {=(hello):{contains(true):{myVariable}}}