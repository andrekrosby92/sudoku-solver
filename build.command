#!/bin/bash
rm -rf staticfiles
cd frontend
npm run build
cd build
mv *.ico *.png manifest.json static/
cd ../..
python manage.py collectstatic