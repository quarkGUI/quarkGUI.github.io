import * as quark from "quark-gui";

let Button = quark.Atoms.Buttons.Button;

export default ` 
<section id="buttons-flat-buttons" class="sub-section">
<h3>Flat buttons</h3>
${Button.getModule({
	content: "Default button",
	id: "button1"
})}

${Button.getModule({
	content: "Primary button",
	id: "button2",
	theme: "primary"
})}
${Button.getModule({
	content: "Info button",
	id: "button3",
	theme: "info"
})}
${Button.getModule({
	content: "Success button",
	id: "button4",
	theme: "success"
})}
${Button.getModule({
	content: "Warning button",
	id: "button5",
	theme: "warning"
})}
${Button.getModule({
	content: "Danger button",
	id: "button6",
	theme: "danger"
})}
</section>

<section id="buttons-raised-buttons" class="sub-section">
<h3>Raised buttons</h3>
${Button.getModule({
	content: "Default button",
	id: "button7",
	type: "raised"
})}
${Button.getModule({
	content: "Primary button",
	id: "button8",
	theme: "primary",
	type: "raised"
})}
${Button.getModule({
	content: "Info button",
	id: "button9",
	theme: "info",
	type: "raised"
})}
${Button.getModule({
	content: "Success button",
	id: "button10",
	theme: "success",
	type: "raised"
})}
${Button.getModule({
	content: "Warning button",
	id: "button11",
	theme: "warning",
	type: "raised"
})}
${Button.getModule({
	content: "Danger button",
	id: "button12",
	theme: "danger",
	type: "raised"
})}
</section>

<section id="buttons-minimal-buttons" class="sub-section">
<h3>Minimal buttons</h3>
${Button.getModule({
	content: "Default button",
	id: "button13",
	type: "minimal"
})}
${Button.getModule({
	content: "Primary button",
	id: "button14",
	theme: "primary",
	type: "minimal"
})}
${Button.getModule({
	content: "Info button",
	id: "button15",
	theme: "info",
	type: "minimal"
})}
${Button.getModule({
	content: "Success button",
	id: "button16",
	theme: "success",
	type: "minimal"
})}
${Button.getModule({
	content: "Warning button",
	id: "button17",
	theme: "warning",
	type: "minimal"
})}
${Button.getModule({
	content: "Danger button",
	id: "button18",
	theme: "danger",
	type: "minimal"
})}
</section>
`;
