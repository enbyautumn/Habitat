//======//
// HTML //
//======//
{

	Habitat.HTML = (source) => {
		const template = document.createElement("template")
		template.innerHTML = source
		return template.content
	}

	Habitat.HTML.install = (global) => {
		global.HTML = Habitat.HTML
		Habitat.HTML.installed = true
	}
	
}
