
brackets = "{ }"

operators = "== != >= <= | + / * ~ , ( ) __ ^ - :"

blocks = f"unix uses args user target server join replace if any all and or break contains strf # random rand urlencode td index list cycle = let assign in upper lower m math 50: c cmd redirect require blacklist react reactu dm delete silence override lvl range"

parameters = f"avatar id created_at joined_at roleids color name proper position icon owner randomonline randomoffline members bots humans roles channels topic slowmode mention trunc round abs"

boolean = "true false"

strf = f"%a %A %w %d %-d %b %B %m %-m %y %Y %H %-H %I %-I %p %M %-M %S %-S %f %z %Z %j %-j %U %W %c %x %X %u %n %i %s"

http = "http https"

# List of categories. Each index being the space-separated string representing all of their values
catList = [brackets, operators, blocks, parameters, boolean, strf, http]

#catDict = { category: values for  }
catDict = { "brackets": brackets.split(),
			"operators": operators.split(),
			"blocks": blocks.split(),
			"parameters": parameters.split(),
			"boolean": boolean.split(),
			"strf": strf.split(),
			"http": http.split()
			}

print(catDict)


