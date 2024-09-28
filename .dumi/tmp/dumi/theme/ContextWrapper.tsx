// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React, { useState, useEffect, useRef } from 'react';
import { useOutlet, history } from 'dumi';
import { warning } from '/Users/chenshuhang/Documents/alito/uitls/node_modules/.pnpm/rc-util@5.43.0/node_modules/rc-util';
import { SiteContext, type ISiteContext } from '/Users/chenshuhang/Documents/alito/uitls/node_modules/.pnpm/dumi@2.4.12_prettier@2.8.8/node_modules/dumi/dist/client/theme-api/context.js';
import { components } from '../meta/atoms';
import { locales } from '../locales/config';



const entryExports = {
};

// Static content
const pkg = {"name":"@alitojs/utils","description":"@alitojs/utils","version":"0.0.2","license":"MIT","repository":{"type":"git","url":"https://github.com/alitojs/utils"},"authors":["hang319 <437132124@qq.com> (https://github.com/hang319)"]};
const historyType = "browser";
const hostname = "https://github.com/alitojs/utils";
const themeConfig = {"footer":"Copyright © 2024 | Powered by <a href=\"https://d.umijs.org\" target=\"_blank\" rel=\"noreferrer\">dumi</a>","prefersColor":{"default":"light","switch":true},"nprogress":true,"lastUpdated":true,"name":"@alitojs","logo":"https://avatars.githubusercontent.com/u/49136103?s=200&v=4","socialLinks":{"github":"https://github.com/alitojs/utils"},"sourceLink":"https://github.com/alitojs/utils/tree/main/{fileName}#L{line}","editLink":"https://github.com/alitojs/utils/edit/main/{filename}"};
const _2_level_nav_available = true;

export default function DumiContextWrapper() {
  const outlet = useOutlet();
  const [loading, setLoading] = useState(false);
  const prev = useRef(history.location.pathname);

  useEffect(() => {
    return history.listen((next) => {
      if (next.location.pathname !== prev.current) {
        prev.current = next.location.pathname;

        // scroll to top when route changed
        document.documentElement.scrollTo(0, 0);
      }
    });
  }, []);

  const context: ISiteContext = React.useMemo(() => {
    const ctx = {
      pkg,
      historyType,
      entryExports,
      demos: null,
      components,
      locales,
      loading,
      setLoading,
      hostname,
      themeConfig,
      _2_level_nav_available,
    };

    // Proxy do not warning since `Object.keys` will get nothing to loop
    Object.defineProperty(ctx, 'demos', {
      get: () => {
        warning(false, '`demos` return empty in latest version, please use `useDemo` instead.');
        return {};
      },
    });

    return ctx;
  }, [
    pkg,
    historyType,
    entryExports,
    components,
    locales,
    loading,
    setLoading,
    hostname,
    themeConfig,
    _2_level_nav_available,
  ]);

  return (
    <SiteContext.Provider value={context}>
      {outlet}
    </SiteContext.Provider>
  );
}
