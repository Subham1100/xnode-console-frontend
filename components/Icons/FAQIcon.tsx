import { IconProps } from '@/utils/icons'

export function FAQIcon({ fill = '#4D4D4D', ...rest }: IconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
        stroke={fill}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.3125 14.0625C10.3125 14.2351 10.1726 14.375 10 14.375C9.82741 14.375 9.6875 14.2351 9.6875 14.0625C9.6875 13.8899 9.82741 13.75 10 13.75C10.1726 13.75 10.3125 13.8899 10.3125 14.0625Z"
        fill={fill}
        stroke={fill}
        strokeWidth="1.25"
      />
      <path
        d="M10 11.25V10.625C10.4326 10.625 10.8556 10.4967 11.2153 10.2563C11.575 10.016 11.8554 9.67433 12.021 9.27462C12.1866 8.87491 12.2299 8.43507 12.1455 8.01074C12.0611 7.58641 11.8527 7.19663 11.5468 6.89071C11.2409 6.58478 10.8511 6.37644 10.4268 6.29203C10.0024 6.20763 9.56259 6.25095 9.16288 6.41651C8.76317 6.58208 8.42153 6.86246 8.18116 7.22219C7.9408 7.58192 7.8125 8.00485 7.8125 8.4375"
        stroke={fill}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}