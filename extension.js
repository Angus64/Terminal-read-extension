({
    name: "Serial Read",
    description: "Read user input from the terminal",
    author: "Angus Blake",
    category: "Communication",
    version: "1.0.0",
    icon: "static/icon.png",
    colour: "#2980B9",
    blocks: [
      "serial_read",
      {
        xml: `
          <block type="serial_read">
            <value name="data_type">
              <shadow type="field_dropdown">
                <field name="NAME">text</field>
                <field name="USER0">text</field>
                <field name="CPU0">TEXT_OPTION</field>
                <field name="USER1">number</field>
                <field name="CPU1">NUMBER_OPTION</field>
              </shadow>
            </value>
            <value name="TOOLTIP">
              <shadow type="text">
                <field name="TEXT">Read user input from the terminal</field>
              </shadow>
            </value>
            <value name="HELPURL">
              <shadow type="text">
                <field name="TEXT">google.com</field>
              </shadow>
            </value>
            <value name="OUTPUTTYPE">
              <shadow type="type_group">
                <mutation types="2"/>
                <value name="TYPE0">
                  <block type="type_number">
                    <field name="NAME">number</field>
                  </block>
                </value>
                <value name="TYPE1">
                  <block type="type_string">
                    <field name="NAME">string</field>
                  </block>
                </value>
              </shadow>
            </value>
            <value name="COLOUR">
              <shadow type="colour_hue">
                <field name="HUE">290</field>
              </shadow>
            </value>
          </block>
        `
      }
    ]
    
})