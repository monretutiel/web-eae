# 10 - Deployment

> Guía paso a paso para publicar el sitio. Sin conocimientos previos de servidores.

## Opción A: GitHub Pages (recomendada)

**Por qué**: gratuito, permanente, se actualiza con un comando, URL profesional.

### Pre-requisitos
- Cuenta gratuita en github.com
- Git instalado en el PC

### Pasos iniciales (solo la primera vez)

**1. Crear repositorio en GitHub**
- Ir a github.com → botón verde "New"
- Nombre sugerido: `eae-web`
- Público ✓ (necesario para GitHub Pages gratuito)
- Sin README, sin .gitignore inicial

**2. Inicializar git en tu proyecto**
```bash
cd C:/Users/MONRA/OneDrive/Documents/WebAutomatizacion/src
git init
git add .
git commit -m "Primer commit: estructura inicial EAE web"
```

**3. Conectar con GitHub y subir**
```bash
git remote add origin https://github.com/TU-USUARIO/eae-web.git
git branch -M main
git push -u origin main
```

**4. Activar GitHub Pages**
- En github.com → tu repositorio → pestaña "Settings"
- Menú lateral "Pages"
- Source: "Deploy from a branch"
- Branch: `main` → carpeta: `/ (root)`
- Guardar

**5. URL disponible en ~2 minutos**
```
https://TU-USUARIO.github.io/eae-web/
```

### Actualizar el sitio (cada vez que hagas cambios)

```bash
cd C:/Users/MONRA/OneDrive/Documents/WebAutomatizacion/src
git add .
git commit -m "Descripción breve del cambio"
git push
```

GitHub Pages se actualiza automáticamente en 1-2 minutos.

---

## Opción B: Netlify (alternativa, aún más fácil)

**Por qué**: no requiere conocer git. Funciona con drag & drop.

**1. Ir a netlify.com** → crear cuenta gratuita

**2. Deploy manual (drag & drop)**
- Dashboard → "Add new site" → "Deploy manually"
- Arrastrar la carpeta `src/` completa a la zona de drop
- URL automática: `nombre-aleatorio.netlify.app`

**3. Renombrar la URL**
- Site Settings → General → "Change site name"
- Ejemplo: `eae-electronica.netlify.app`

**4. Para actualizar**: volver a arrastrar la carpeta `src/` actualizada.

---

## Consideraciones técnicas importantes

### Rutas relativas (crítico para GitHub Pages)

GitHub Pages sirve el sitio desde una subruta: `github.io/eae-web/`

Si usas rutas absolutas como `/assets/css/style.css`, **fallarán** porque el servidor buscará en `github.io/assets/...` en lugar de `github.io/eae-web/assets/...`.

**Siempre usar rutas relativas:**
```html
<!-- ✓ Correcto (relativo) -->
<link rel="stylesheet" href="../../assets/css/variables.css">

<!-- ✗ Incorrecto (absoluto) -->
<link rel="stylesheet" href="/assets/css/variables.css">
```

### El archivo `.nojekyll`

GitHub Pages usa Jekyll por defecto, que ignora carpetas que empiezan por `_`.
El archivo `.nojekyll` vacío en la raíz de `src/` desactiva Jekyll y sirve todos los archivos.

### Archivos no subir a GitHub

Añadir estas líneas al archivo `.gitignore` en la raíz del proyecto:

```
# PDFs fuente (privados, posibles derechos de autor)
material/

# Archivos del sistema
.DS_Store
Thumbs.db
desktop.ini

# Editores
.vscode/
.idea/
*.suo

# Documentos de trabajo temporales
*.tmp
```

---

## Dominio personalizado (opcional)

Si quieres una URL como `eae.mst-automation.com`:

1. Comprar dominio (ej: en namecheap.com, dondominio.com ~10€/año)
2. En GitHub Pages: Settings → Pages → Custom domain → escribir el dominio
3. En tu proveedor de dominio: añadir registro DNS tipo CNAME apuntando a `TU-USUARIO.github.io`
4. Esperar propagación DNS (hasta 48h)

---

## Checklist pre-deploy

- [ ] Todos los archivos guardados
- [ ] `src/.nojekyll` existe (vacío)
- [ ] Todas las rutas CSS y JS son relativas
- [ ] `src/index.html` carga sin errores en navegador local
- [ ] Ningún archivo contiene rutas absolutas `/`
- [ ] Los JSON de quizzes son JSON válido (verificar en jsonlint.com si hay dudas)
- [ ] No hay contraseñas, tokens ni datos privados en el código
