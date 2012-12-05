#Usage


<fieldset> // Note - Can use any tag as a wrapper
	<label for="input_name">Placeholder Text</label>
    <input name="input_name " id="input_name " />
</fieldset>

<code>
fieldset {
	position: relative;
}
label { // Preferably use a class
    position: absolute;
    display: none;
    top: 0;
    left: 0;
    z-index: 999;
    padding: 5px; //or whatever the input padding is
}
</code>