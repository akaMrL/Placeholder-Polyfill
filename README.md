#Usage


<pre>

&lt;fieldset&gt; // Note - Can use any tag as a wrapper
	&lt;label for=&quot;input_name&quot;&gt;Placeholder Text&lt;/label&gt;
    &lt;input name=&quot;input_name &quot; id=&quot;input_name &quot; /&gt;
&lt;/fieldset&gt;

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

</pre>

