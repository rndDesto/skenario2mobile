import { memo, SVGProps } from 'react';

const CompanyLogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 114 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#prefix__a)'>
      <path
        d='M23.513 13.917c-4.067 0-7.245 3.088-7.245 7.22 0 4.134 3.098 7.195 7.245 7.195 4.148 0 7.3-3.114 7.3-7.22 0-4.081-3.098-7.195-7.3-7.195Zm.028 11.437c-2.316 0-4.014-1.8-4.014-4.215 0-2.443 1.67-4.241 3.986-4.241 2.344 0 4.04 1.825 4.04 4.24 0 2.417-1.696 4.216-4.012 4.216Zm8.16-8.296h2.02v11.007h3.232v-13.88H31.7v2.873Zm-23.567-.161c1.698 0 3.044 1.047 3.556 2.604h3.42c-.62-3.329-3.367-5.584-6.948-5.584-4.067 0-7.245 3.088-7.245 7.222s3.097 7.194 7.245 7.194c3.501 0 6.302-2.255 6.922-5.61H11.69c-.485 1.556-1.832 2.63-3.53 2.63-2.343 0-3.985-1.798-3.985-4.214 0-2.443 1.617-4.242 3.96-4.242Zm84.974 2.9-2.37-.35c-1.13-.16-1.939-.536-1.939-1.422 0-.967 1.051-1.45 2.478-1.45 1.562 0 2.559.671 2.774 1.772h3.125c-.351-2.792-2.506-4.429-5.818-4.429-3.42 0-5.683 1.745-5.683 4.215 0 2.362 1.482 3.732 4.47 4.16l2.37.349c1.16.16 1.806.618 1.806 1.477 0 1.1-1.131 1.557-2.694 1.557-1.912 0-2.99-.779-3.151-1.96h-3.178c.297 2.712 2.424 4.617 6.302 4.617 3.529 0 5.871-1.61 5.871-4.376 0-2.47-1.696-3.758-4.363-4.16ZM35.337 8.466c-1.185 0-2.074.86-2.074 2.04 0 1.181.888 2.04 2.074 2.04 1.185 0 2.074-.859 2.074-2.04 0-1.18-.89-2.04-2.074-2.04Zm47.43 10.47c0-3.006-1.832-5.019-5.71-5.019-3.663 0-5.71 1.853-6.115 4.698h3.206c.161-1.1 1.023-2.013 2.855-2.013 1.643 0 2.451.725 2.451 1.611 0 1.155-1.482 1.45-3.313 1.637-2.478.268-5.548 1.127-5.548 4.349 0 2.497 1.859 4.107 4.821 4.107 2.316 0 3.77-.967 4.498-2.497.108 1.369 1.132 2.255 2.56 2.255h1.885v-2.872h-1.59v-6.255Zm-3.179 3.49c0 1.853-1.616 3.222-3.582 3.222-1.213 0-2.236-.51-2.236-1.583 0-1.37 1.643-1.745 3.152-1.906 1.454-.134 2.262-.456 2.666-1.074v1.342Zm-17.156-8.51c-1.805 0-3.313.752-4.39 2.013V8.333H54.81v19.732h3.177V26.24c1.078 1.315 2.614 2.093 4.445 2.093 3.878 0 6.814-3.06 6.814-7.194s-2.99-7.222-6.814-7.222Zm-.485 11.437c-2.316 0-4.013-1.8-4.013-4.215 0-2.416 1.724-4.241 4.04-4.241 2.343 0 3.985 1.799 3.985 4.24 0 2.417-1.696 4.216-4.012 4.216ZM47.08 13.917c-2.1 0-3.474.859-4.282 2.067v-1.799H39.59v13.88h3.232V20.52c0-2.121 1.347-3.624 3.34-3.624 1.859 0 3.016 1.315 3.016 3.222v7.946h3.232v-8.187c.001-3.491-1.803-5.961-5.332-5.961Zm65.799 6.766c0-3.973-2.909-6.765-6.815-6.765-4.147 0-7.191 3.114-7.191 7.22 0 4.323 3.259 7.195 7.245 7.195 3.367 0 6.006-1.986 6.679-4.805h-3.367c-.485 1.235-1.67 1.933-3.259 1.933-2.074 0-3.637-1.288-3.986-3.544h10.693v-1.234h.001Zm-10.505-1.075c.512-1.933 1.966-2.872 3.636-2.872 1.832 0 3.232 1.047 3.555 2.872h-7.191Z'
        fill='#0052FF'
      />
    </g>
    <defs>
      <clipPath id='prefix__a'>
        <path fill='#fff' transform='translate(.917)' d='M0 0h112.5v40H0z' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(CompanyLogoIcon);
export { Memo as CompanyLogoIcon };