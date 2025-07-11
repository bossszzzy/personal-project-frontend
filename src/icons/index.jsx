export function FacebookIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Facebook"
      viewBox="0 0 512 512"
      {...props}
    >
      <rect width={512} height={512} rx="15%" fill="#1877f2" />
      <path
        d="M355.6 330l11.4-74h-71v-48c0-20.2 9.9-40 41.7-40H370v-63s-29.3-5-57.3-5c-58.5 0-96.7 35.4-96.7 99.6V256h-65v74h65v182h80V330h59.6z"
        fill="#fff"
      />
    </svg>
  );
}

export function InstagramIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-label="Instagram"
      viewBox="0 0 512 512"
      {...props}
    >
      <rect width={512} height={512} rx="15%" id="b" />
      <use fill="url(#a)" xlinkHref="#b" />
      <use fill="url(#c)" xlinkHref="#b" />
      <radialGradient id="a" cx={0.4} cy={1} r={1}>
        <stop offset={0.1} stopColor="#fd5" />
        <stop offset={0.5} stopColor="#ff543e" />
        <stop offset={1} stopColor="#c837ab" />
      </radialGradient>
      <linearGradient id="c" x2={0.2} y2={1}>
        <stop offset={0.1} stopColor="#3771c8" />
        <stop offset={0.5} stopColor="#60f" stopOpacity={0} />
      </linearGradient>
      <g fill="none" stroke="#fff" strokeWidth={30}>
        <rect width={308} height={308} x={102} y={102} rx={81} />
        <circle cx={256} cy={256} r={72} />
        <circle cx={347} cy={165} r={6} />
      </g>
    </svg>
  );
}

export function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="#0077B5"
        fillRule="evenodd"
        d="M20.452 20.45h-3.56v-5.57c0-1.328-.022-3.036-1.85-3.036-1.851 0-2.134 1.447-2.134 2.942v5.664H9.352V8.997h3.413v1.566h.049c.475-.9 1.636-1.85 3.367-1.85 3.605 0 4.27 2.371 4.27 5.456v6.281zM5.339 7.433a2.063 2.063 0 110-4.13 2.065 2.065 0 010 4.13zM7.12 20.45H3.558V8.997H7.12V20.45zM23 0H1a1 1 0 00-1 1v22a1 1 0 001 1h22a1 1 0 001-1V1a1 1 0 00-1-1z"
      />
    </svg>
  )
}
