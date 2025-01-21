
Blockly.Blocks['serial_read'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("read");
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["text","TEXT"], ["number","NUMBER"]]), "data_type");
      this.appendDummyInput()
          .appendField("from terminal");
      this.setInputsInline(true);
      this.setOutput(true, ["String"]);
      this.setColour("#2980B9");
   this.setTooltip("Read user input from the terminal");
   this.setHelpUrl("google.com");
    }
  };