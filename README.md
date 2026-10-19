# 529_job_site

Vite + React + TypeScript + Mantine + Redux Toolkit + RTK Query + React-router.

[`link-page`](https://killbytes.github.io/529_job_site//table)

opencode mcp add figma --url https://mcp.figma.com/mcp
opencode mcp list


Промт:
Подключись к Figma через настроенный Figma MCP и изучи компонент по ссылке:

https://www.figma.com/design/oKLExOS0keaY53V5ZKNrv2/Test-HTML---Copy-?node-id=1-9455&t=JsyXuLI653Mzqj54-1

Получи данные именно выбранного узла Figma, включая его дочерние элементы.
Изучи структуру слоёв, размеры, отступы, цвета, типографику, границы, скругления и изображения.
Определи, какие элементы являются компонентами и какие свойства у них есть.
Проверь, какие ассеты можно получить через Figma MCP.
Составь краткое описание структуры компонента и предложи план реализации на React + TypeScript.
Укажи, какие данные не удалось получить или проверить.
Не устанавливай новые библиотеки без необходимости.
Стили размещай в соответствии с существующими соглашениями проекта.
Учитывай адаптивность, если она предусмотрена макетом.
Используй реальные изображения и ассеты из Figma, когда они доступны.
Не меняй несвязанные с задачей файлы.
После реализации запусти доступные проверки TypeScript, линтер и тесты.
В конце перечисли созданные и изменённые файлы и укажи, какие детали дизайна требуют ручной проверки.

# Browser MCP с расширением Chrome

https://browsermcp.dev/docs/install-opencode/

{
  "mcp": {
   "servers": {
    "figma": {
     "type": "remote",
     "url": "https://mcp.figma.com/mcp"
    }
   },
   "browser-mcp": {
    "type": "local",
    "command": ["npx", "-y", "@agent360/browser-mcp@latest"]
   }
  }
}

промт:
"Открой http://localhost:5173/529_job_site/, сделай скриншот и проверь отображение карточек."


