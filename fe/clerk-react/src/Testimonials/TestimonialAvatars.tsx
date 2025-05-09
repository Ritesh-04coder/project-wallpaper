function TestimonialAvatars() {
  return (
    <div className="flex items-center rounded-full border border-gray-700 bg-gray-900 p-2 shadow-lg">
      <div className="flex -space-x-2">
        <img
          className="rounded-full ring-2 ring-gray-900"
          src="https://originui.com/avatar-80-03.jpg"
          width={32}
          height={32}
          alt="Avatar 01"
        />
        <img
          className="rounded-full ring-2 ring-gray-900"
          src="https://originui.com/avatar-80-04.jpg"
          width={32}
          height={32}
          alt="Avatar 02"
        />
        <img
          className="rounded-full ring-2 ring-gray-900"
          src="https://originui.com/avatar-80-05.jpg"
          width={32}
          height={32}
          alt="Avatar 03"
        />
        <img
          className="rounded-full ring-2 ring-gray-900"
          src="https://originui.com/avatar-80-06.jpg"
          width={32}
          height={32}
          alt="Avatar 04"
        />
      </div>
      <p className="px-3 text-xs text-white">
        Trusted by <strong className="font-medium text-yellow-400">60K+</strong> developers.
      </p>
    </div>
  );
}

export default TestimonialAvatars;
