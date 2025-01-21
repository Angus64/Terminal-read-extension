Blockly.Python['serial_read'] = function(block) {

  Blockly.Python.definitions_['import_sys'] = 'import sys';
  var dropdown_data_type = Blockly.Python.valueToCode(block, 'data_type', Blockly.ORDER_ATOMIC);

  var code = ''
  if (dropdown_data_type == 'number') {
    code = `int(sys.stdin.readline().strip())`;
  } else if (dropdown_data_type == 'text') {
    code = `str(sys.stdin.readline().strip())`;
  }

  return [code, Blockly.python.ORDER_NONE];
};
