
Blockly.Blocks['serial_read'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("read");
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["text","TEXT"], ["number","NUMBER"]]), "[choose data type]");
      this.appendDummyInput()
          .appendField("from terminal");
      this.setInputsInline(true);
      this.setOutput(true, "String");
      this.setColour(260);
   this.setTooltip("Read user input from the terminal");
   this.setHelpUrl("");
    }
  };