#!/bin/bash
for f in /Users/xieweicheng/Downloads/coding-2293/*; do
    # f=${f/\./''}
    ft=${f/\/Users\/xieweicheng\/Downloads\/coding-2293\//''}
    if echo $ft | grep -e zip$; then
        # rm -f $f
        echo $ft
    fi
done
