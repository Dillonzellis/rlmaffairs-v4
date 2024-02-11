import { LucideProps } from "lucide-react";

export const Icons = {
  downArrow: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 20 55">
      <g clip-path="url(#clip0_731_303)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20 43.3L10 55L9.53674e-06 43.3L0.900009 42.4L9.30001 52.2L9.30001 0L10.7 0L10.7 52.2L19.1 42.4L20 43.3Z"
          fill="#FCFCFC"
        />
      </g>
      <defs>
        <clipPath id="clip0_731_303">
          <rect
            width="55"
            height="20"
            fill="white"
            transform="matrix(0 1 -1 0 20 0)"
          />
        </clipPath>
      </defs>
    </svg>
  ),

  star: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 51 49">
      <path
        d="M25.5 1L33.0705 16.469L50 18.9648L37.75 30.9989L40.641 48L25.5 39.969L10.359 48L13.25 30.9989L1 18.9648L17.9295 16.469L25.5 1Z"
        fill="white"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
};
