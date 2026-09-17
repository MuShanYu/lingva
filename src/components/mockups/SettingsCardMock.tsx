const modes = ['双语对照', '仅译文', '仅原文']

export default function SettingsCardMock() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl shadow-gray-300/40">
      <p className="text-sm font-medium text-gray-900">字幕模式</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {modes.map((mode, i) => (
          <span
            key={mode}
            className={`rounded-full border px-3 py-1.5 text-xs ${
              i === 0
                ? 'border-brand bg-brand/10 text-brand'
                : 'border-gray-200 text-gray-500'
            }`}
          >
            {mode}
          </span>
        ))}
      </div>

      <p className="mt-5 text-sm font-medium text-gray-900">目标语言</p>
      <div className="mt-2 flex items-center justify-between rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700">
        简体中文
        <span className="text-gray-400">▾</span>
      </div>

      <p className="mt-5 text-sm font-medium text-gray-900">翻译引擎</p>
      <div className="mt-2 flex items-center justify-between rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700">
        Google: Gemini 3.5 Flash Lite
        <span className="text-gray-400">▾</span>
      </div>

      <p className="mt-5 text-sm font-medium text-gray-900">背景透明度</p>
      <div className="mt-3 h-1.5 w-full rounded-full bg-gray-100">
        <div className="h-1.5 w-4/5 rounded-full bg-brand" />
      </div>
    </div>
  )
}
