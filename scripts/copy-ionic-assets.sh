#!/bin/bash
#
# Script pour copier les assets Ionic buildés dans le SDK
#
# Usage:
#   ./scripts/copy-ionic-assets.sh /path/to/appli-usager-v3/www
#

set -e

# Couleurs
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Répertoire du script
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
SDK_ASSETS_DIR="$PROJECT_ROOT/ecovelo-sdk/src/main/assets/public"

# Vérifier l'argument
if [ -z "$1" ]; then
    echo -e "${RED}❌ Erreur: Chemin vers les assets Ionic requis${NC}"
    echo ""
    echo "Usage:"
    echo "  $0 /path/to/appli-usager-v3/www"
    echo ""
    echo "Ou builder depuis appli-usager-v3:"
    echo "  cd /path/to/appli-usager-v3"
    echo "  npm run build -- --configuration=breizhgo"
    echo "  $0 ./www"
    exit 1
fi

SOURCE_DIR="$1"

# Vérifier que le répertoire source existe
if [ ! -d "$SOURCE_DIR" ]; then
    echo -e "${RED}❌ Erreur: Le répertoire '$SOURCE_DIR' n'existe pas${NC}"
    exit 1
fi

# Vérifier qu'il contient un index.html
if [ ! -f "$SOURCE_DIR/index.html" ]; then
    echo -e "${RED}❌ Erreur: Pas de index.html dans '$SOURCE_DIR'${NC}"
    echo "Assurez-vous d'avoir buildé l'app Ionic"
    exit 1
fi

echo -e "${YELLOW}📦 Copie des assets Ionic vers le SDK...${NC}"
echo "   Source: $SOURCE_DIR"
echo "   Dest:   $SDK_ASSETS_DIR"

# Créer le répertoire cible
mkdir -p "$SDK_ASSETS_DIR"

# Supprimer les anciens assets (sauf .gitkeep si présent)
echo "   Nettoyage des anciens assets..."
find "$SDK_ASSETS_DIR" -mindepth 1 -not -name '.gitkeep' -delete 2>/dev/null || true

# Copier les nouveaux assets
echo "   Copie des fichiers..."
cp -r "$SOURCE_DIR"/* "$SDK_ASSETS_DIR/"

# Compter les fichiers
FILE_COUNT=$(find "$SDK_ASSETS_DIR" -type f | wc -l | tr -d ' ')

echo -e "${GREEN}✅ Terminé! $FILE_COUNT fichiers copiés${NC}"
echo ""
echo "Prochaines étapes:"
echo "  1. Ouvrir le projet dans Android Studio"
echo "  2. Sync Gradle"
echo "  3. Run 'sample-app' sur émulateur"
