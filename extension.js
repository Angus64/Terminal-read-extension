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
              <shadow type="text">
              </shadow>
            </value>
          </block>
        `
      }
    ]
    
})