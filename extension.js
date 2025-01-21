({
    "type": "serial_read",
    "message0": "read %1 %2 %3 from terminal",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "data_type",
        "options": [
          [
            "text",
            "TEXT"
          ],
          [
            "number",
            "NUMBER"
          ]
        ]
      },
      {
        "type": "input_dummy"
      }
    ],
    "inputsInline": true,
    "output": "String",
    "colour": 260,
    "tooltip": "Read user input from the terminal",
    "helpUrl": ""
})