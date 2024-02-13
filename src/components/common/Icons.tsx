import { LucideProps } from "lucide-react";

export const Icons = {
  downArrow: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 20 55">
      <g clipPath="url(#clip0_731_303)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 43.3L10 55L9.53674e-06 43.3L0.900009 42.4L9.30001 52.2L9.30001 0L10.7 0L10.7 52.2L19.1 42.4L20 43.3Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_731_303">
          <rect
            width="55"
            height="20"
            fill="currentColor"
            transform="matrix(0 1 -1 0 20 0)"
          />
        </clipPath>
      </defs>
    </svg>
  ),

  rightArrow: (props: LucideProps) => (
    <svg
      {...props}
      width="58"
      height="20"
      viewBox="0 0 58 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_731_311)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M45.5205 0L57.8205 10L45.5205 20L44.5743 19.1L54.8769 10.7L0 10.7L0 9.3L54.8769 9.3L44.5743 0.9L45.5205 0Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_731_311">
          <rect width="57.8205" height="20" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  ),

  star: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 51 49">
      <path
        d="M25.5 1L33.0705 16.469L50 18.9648L37.75 30.9989L40.641 48L25.5 39.969L10.359 48L13.25 30.9989L1 18.9648L17.9295 16.469L25.5 1Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};
