import esbuild from "esbuild";
import { resolve } from "path";
import { existsSync, mkdirSync } from "fs";

// Конфигурация сборки для каждого модуля
const buildTargets = {
    server: {
        entry: "src/server/index.ts", // Путь к исходному файлу сервера
        outDir: "../packages/server", // Путь к собранному файлу сервера
        platform: "node", // Серверная частья
    },
    client: {
        entry: "src/client/index.ts", // Путь к исходному файлу клиента
        outDir: "../client_packages", // Путь к собранному файлу клиента
        platform: "node", // Клиентская часть
    }
};

// Получаем аргумент из командной строки
const target = process.argv[2];

// Деструктурируем конфигурацию для текущей цели сборки
const { entry, outDir, platform } = buildTargets[target];

// Убеждаемся, что билд папка существует (если нет — создаем)
if (!existsSync(outDir)) {
    mkdirSync(outDir, { recursive: true });
}

// Запуск esbuild
esbuild.build({
    entryPoints: [resolve(entry)], // Путь к исходному файлу
    outfile: resolve(outDir, "index.js"), // Путь к собраному файлу
    bundle: true, // Собираем все зависимости в один файл
    minify: true, // Минификация кода
    sourcemap: false, // Генерация source map
    platform: platform, // Среда выполнения
    target: "esnext", // Используем новейший синтаксис JS
    format: "cjs" // Устанавливаем формат для CommonJS
}).then(() => {
    console.log(`${target} успешно собран в ${outDir}/index.js`);
}).catch((error) => {
    console.error(`Ошибка сборки ${target}:`, error);
    process.exit(1);
});