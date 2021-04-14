import Component from "./selector.svelte"
import Input from "../input";
import {SvelteComponent} from "svelte";
import FormDoc from "../doc";

export default class SelectorInput extends Input {
	static component: typeof SvelteComponent = Component;
	props: { api: string, multi: boolean, Form: typeof FormDoc } = {api: '', multi: false, Form: null}

	api(api:string): this {
		this.props.api = api;
		return this;
	}
	form(Form:typeof FormDoc): this {
		this.props.Form = Form;
		return this;
	}
	get multi(): this{
		this.props.multi = true;
		return this;
	}
}
























































































































































































































































































































































































































































































































































































































































